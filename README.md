# File Browser Demo App, GTK/Libadwaita

Life cycle:

- Startup
- Activation

"subdir" is defined in root meson.build
and gnome function is imported in the root meson

Install flatpak builder, flatpak version

- flatpak install org.flatpak.Builder

Install build env:

- flatpak install --user org.gnome.Platform//43 org.gnome.Sdk//43

Used Common Commands:

- flatpak run org.flatpak.Builder --force-clean --user --install build-dir org.example.filebrowser.yml
- flatpak run org.example.filebrowser

My commands:

- To open the current project in Gnome Builder from VS code
```flatpak run org.gnome.Builder . --editor```

/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=gnome-builder org.gnome.Builder  --editor
