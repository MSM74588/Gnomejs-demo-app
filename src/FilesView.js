import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

export const FilesView = GObject.registerClass({
    GType: 'FbrFilesView',
    Template: 'resource:///org/example/filebrowser/ui/FilesView.ui'
}, class extends Gtk.Widget {

    
})