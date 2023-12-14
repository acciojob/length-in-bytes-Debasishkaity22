const byteSize = (str) => {
  // write your code here
	let l=new TextEncoder().encode(str)
	return l.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

