import 'gi://Gdk?version=4.0'
import 'gi://Gtk?version=4.0'

import { FbrApplication } from './Application.js'

export function main(argv) {
	// console.log('Hello World!');
    return new FbrApplication({ 'application-id': pkg.name }).run(argv);
}

// In src/main.js, we’ll ask for GTK4, then import our application 
// and create a new instance with our application ID, instead of just logging a message