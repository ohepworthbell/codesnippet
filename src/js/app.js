import _id from './quickselect';
import _bind from './bind-io';
import _highlight from './highlight';

/**
 *  Log page load (for testing)
 *
 */
export default class App {
  constructor() {
    // Get inputs
    this.inputs = {
      name: _id('js-input-name'),
      code: _id('js-input-code'),
      codetype: _id('js-input-codetype')
    };

    // Get ouputs
    this.outputs = {
      name: _id('js-output-name'),
      code: _id('js-output-code')
    };

    // Monitor
    this.monitorInputs();
    this.monitorCodeEditorKeyPress();
    this.changeSyntaxHighlightClass();
  }

  /**
   *  Monitor inputs and update outputs as appropriate
   * 
   */
  monitorInputs() {
    _bind(this.inputs.name, this.outputs.name, this.refreshSyntax.bind(this));
    _bind(this.inputs.code, this.outputs.code, this.refreshSyntax.bind(this));
  }

  /**
   *  Ensure 'tab' and 'return' keys are ignored on
   * 
   */
  monitorCodeEditorKeyPress() {
    this.inputs.code.addEventListener('keydown', function(e){
      // Block tab key skipping to next input
      if (e.code === 'Tab' || e.which === 9) {
        e.preventDefault();

        // Get start of selection
        let _value = this.value;
        let _start = this.selectionStart;

        // Insert 2 spaces (HEATHEN) at current caret position
        this.value = _value.substring(0, _start) + '  ' + _value.substring(_start, _value.length);
      }
    });
  }

  /**
   *  Apply syntax changes
   * 
   */
  refreshSyntax(timeout = 1000) {
    // Clear existing timeouts
    if (this._timeout) clearTimeout(this._timeout);

    // Create new timeout
    this._timeout = setTimeout(() => _highlight(this.outputs.code), timeout);
  }

  /**
   *  Add syntax highlighting class
   * 
   */
  changeSyntaxHighlightClass() {
    // Change code function
    let _updateCodeOutput = () => {
      let selected_syntax = this.inputs.codetype.options[this.inputs.codetype.options.selectedIndex].value;

      // Set appropriate class
      this.outputs.code.className = selected_syntax.toLowerCase();

      // Refresh syntax
      this.refreshSyntax(0);
    };

    // Monitor and change classnames as necessary
    this.inputs.codetype.addEventListener('change', _updateCodeOutput);

    // Load any initial classnames
    _updateCodeOutput(0);
  }
}
