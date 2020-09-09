Tree.prototype.DFSelect = function(filter) {      
  const result = [];
  const traverse = (node, depth = 0) => {
    if (filter(node.value, depth)) {
      result.push(node.value);
    }
    node.children.forEach(child => traverse(child, depth + 1));
  };
  traverse(this);
  return result;
};