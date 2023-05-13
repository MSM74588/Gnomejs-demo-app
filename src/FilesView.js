import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

import { File } from './File.js';

export const FilesView = GObject.registerClass({
    GType: 'FbrFilesView',
    Template: 'resource:///org/example/filebrowser/ui/FilesView.ui',
    Properties: {
		files: GObject.ParamSpec.object(
			'files',
			'Files',
			'The list model containing the files',
			GObject.ParamFlags.READWRITE,
			Gio.ListStore
		),
	},
}, class extends Gtk.Widget {
    constructor(params={}) {
		super(params);
		this.#initializeFiles();
	}

	#initializeFiles() {
		// Create the Gio.ListStore that will contain File objects
		this.files = Gio.ListStore.new(File);

		// Get the current directory
		const currentDir = Gio.File.new_for_path(GLib.get_current_dir());

		// Get an enumerator of all children
		const children = currentDir.enumerate_children('standard::*', Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS, null);

		// Iterate over the enumerator and add each child to the list store
		let fileInfo;
		while (fileInfo = children.next_file(null)) {
			this.files.append(new File({
				name: fileInfo.get_display_name(),
				icon: Gio.content_type_get_icon(fileInfo.get_content_type()),
				type: fileInfo.get_file_type(),
			}));
		}
	}

})