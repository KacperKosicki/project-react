const strContains = (string, fragment) => {
    const lowerCaseString = string.toLowerCase();
    const lowerCaseFragment = fragment.toLowerCase();
    return lowerCaseString.includes(lowerCaseFragment);
  };
  
  export default strContains;