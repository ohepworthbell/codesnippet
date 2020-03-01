/**
 *  Quicklt fetch elements by their ID
 * 
 *  @param {String} id
 */
export default function _id(id){
  return document.getElementById(id) || null;
}
