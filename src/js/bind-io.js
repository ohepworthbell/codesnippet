/**
 *  Bind change events from an input to an output
 * 
 *  @param {HTMLElement} input
 *  @param {HTMLElement} output
 *  @param {Function} callback
 */
export default function _bind(input, output, callback){
  // Create update function
  let _update = () => {
    output.textContent = input.value;

    // Run any necessary callbacks
    callback();
  };

  // Add listener for update function
  ['input', 'change'].forEach(evt => {
    input.addEventListener(evt, _update);
  });

  // Run update function
  _update();
}
