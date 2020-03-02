import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import rust from 'highlight.js/lib/languages/rust';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';

// Import themes
import 'highlight.js/styles/vs2015.css';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);

/**
 *  Add highlighting to output
 * 
 *  @param {HTMLElement} output
 */
export default function _highlight(output = null){
  if (!output || !(output instanceof HTMLElement)) throw new Error('Must specify an output for highlighting');

  // Apply highlighter styling
  hljs.highlightBlock(output);
}
