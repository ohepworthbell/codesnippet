import _id from './quickselect';
import _bind from './bind-io';

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
    _bind(this.inputs.name, this.outputs.name);
    _bind(this.inputs.code, this.outputs.code);
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
   *  Add syntax highlighting class
   * 
   */
  changeSyntaxHighlightClass() {
    let output = this.outputs.code;

    this.inputs.codetype.addEventListener('change', function(){
      let selected_syntax = this.options[this.options.selectedIndex].value;

      // Set appropriate class
      output.className = selected_syntax.toLowerCase();
    });
  }
}
