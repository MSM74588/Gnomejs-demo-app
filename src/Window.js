import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

export const Window = GObject.registerClass({
	GTypeName: 'FbrWindow',
	Template: 'resource:///org/example/filebrowser/ui/Window.ui',
	InternalChildren: ['viewStack'],
}, class extends Gtk.ApplicationWindow {
    vfunc_close_request() {
		super.vfunc_close_request();
		this.run_dispose();
	}

	// this func when triggered on button click, it will change visible stack page to files (declared as "name" property)
	onWelcomeButtonClicked(_widget) {
		this._viewStack.visibleChildName = 'files';
	}
});

