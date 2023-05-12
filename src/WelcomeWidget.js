import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk'

export const WelcomeWidget = GObject.registerClass({
    GTypeName: 'FbrWelcomeWidget',
    Template: 'resource:///org/example/filebrowser/ui/WelcomeWidget.ui',
    CssName: 'welcome',
    Properties: {
        WelcomeText: GObject.ParamSpec.string(
            'welcome-text', //name
            'Welcome Text', //nick
            'The text displayed by widget', //blurb
            GObject.ParamFlags.READWRITE, //flags
            '' //default value
        )
    
    },
    
    InternalChildren: ['welcomeLabel'],
    // We declare a simple signal in the Signal object of the configuration object of our class:
    Signals: {
        // declaring this button-clicked event, so others can act upon seeing it...
		'button-clicked': {},
	},
}, class extends Gtk.Widget {
    get welcomeText() {
        // Return a default value if the text hasn't been set yet
		return this._welcomeText || '';
    }
    // i defined welcome text in line 8, as GObject
    set welcomeText(value) {
		// Do nothing if the new value is the same as the old one
		if (this._welcomeText === value)
			return;
		// Store the value in an internal property
		this._welcomeText = value;
        // Hide the label if no text is set
		this._welcomeLabel.visible = !!value;
        // Notify that the value has changed
		this.notify('welcome-text');
	}

    onButtonClicked(_button) {
		// console.log('Button clicked!');
        this.emit('button-clicked');
	}
});

// name: The name of the property, which must be in kebab case
// nick: The human-friendly name
// blurb: The description of the property
// default_value: The default value of the property
// flags: The GObject.ParamFlags describing the property

// To do so, instead of putting a value in the property element, we will give it several attributes:
// 
    // bind-source: The source object that bears the property we’re interested in, either its name if it’s the template widget or its ID
    // bind-property: The property we want to bind
    // bind-flags: Optionally, the GObject.BindingFlags used to bind the property