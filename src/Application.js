import Gtk from "gi://Gtk";
// import Adw from 'gi://Adw';
import GObject from "gi://GObject";

export const FbrApplication = GObject.registerClass(
  {
    GTypeName: "FbrApplication",
  },
  // class extends Gtk.Application {
  class extends Adw.Application {
    vfunc_activate() {
      // console.log('Hello World!');

      // Application window widget
      const window = new Gtk.ApplicationWindow({ application: this });

      // BOX widget
      const box = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        marginTop: 36,
        marginBottom: 36,
        marginStart: 36,
        marginEnd: 36,
      });

      //IMAGE
      const image = new Gtk.Image({
        iconName: "system-file-manager-symbolic",
        iconSize: Gtk.IconSize.LARGE,
      });
      box.append(image);

      // LABEL
      const label = new Gtk.Label({
        label: "Welcome to our new file browser!",
        wrap: true,
      });
      box.append(label);

      // BUTTON
      const button = new Gtk.Button({
        label: "Let's go!",
      });
      box.append(button);

      // Setting BOX widget as window child
      window.child = box;

      // Showing the window with all the child widgets
      window.present();
    }
  }
);

// this is a subclass, in order to implement the various stages.
// HEre FbrApplication (File Browser Application) is extending Gtk.Application.class
// It’s a good practice to prefix the objects to prevent name collisions. Here, we chose the Fbr prefix, for File Browser.

// vfunc => Virtual function
// To implement a virtual method, append vfunc_ to its name, and add it to your class:

// Remember to add the files to gresources
