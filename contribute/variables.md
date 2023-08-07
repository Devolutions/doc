## Variables

Variables are placeholders that represent other content, mostly Devolutions product names and features. They are a way of ensuring consistency and making our content more maintainable.

Available variables are located in the [_data](https://github.com/Devolutions/doc/tree/master/docs/_data) folder. They are listed in .js files named after one of the supported languages, which are [English (en.js)](https://github.com/Devolutions/doc/tree/master/docs/_data/en.js/), [French (fr.js)](https://github.com/Devolutions/doc/tree/master/docs/_data/fr.js/), and [German (de.js)](https://github.com/Devolutions/doc/tree/master/docs/_data/de.js/).

### How to use variables

Variables can be inserted in the body of the text, in image captions, in links, and in the front matter. If a variable exists for a word or sequence of words, it must be used instead of the long form. Once deployed online, the variable will display its value in the topic.

Variables comprise three sections: the braces "{{  }}" (or curly brackets), the language code (en/fr/de), and the variable itself. Here is an example of the English variable for "Remote Desktop Manager": "{{ en.RDM }}".

* All variables must be enclosed in two consecutive sets of braces (two opening braces at the beginning, two closing braces at the end). Right after the opening braces and right before the closing braces, a space must be added. This is important, as the variable will not be displayed properly if there are no spaces.

* Between the two spaces, write **in lowercase** the language code that corresponds to the language of the topic ("en" for English, "fr" for French, "de" for German). Add a period right after the language code, then write the variable **in uppercase** as it appears in the .js file in [_data](https://github.com/Devolutions/doc/tree/master/docs/_data).

**Important**: Remember to follow exactly the instructions above. If not, variables will not appear correctly. Pay close attention to spaces and capitalization.

Here are additional examples of variables and of what they will display when deployed online:
* "{{ de.DHUBB }}" will display "Devolutions Hub Business" in a German topic.
* "{{ en.CIS }}" will display "Custom Installer Service" in an English topic.
* "{{ fr.WS }}" will display "Workspace" in a French topic.
