/**
 *  Bind change events from an input to an output
 * 
 *  @param {HTMLElement} input
 *  @param {HTMLElement} output
 */
export default function _bind(input, output){
  ['input', 'change'].forEach(evt => {
    input.addEventListener(evt, () => {
      output.textContent = input.value;
    });
  });
}
