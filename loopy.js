var nums = 100
while (nums < 201) {


  if (nums % 4 === 0 && nums % 3 === 0) {
    console.log("LoopyLighthouse")
  }
    else if (nums % 4 === 0) {
    console.log("Lighthouse")
  }
  else if (nums % 3 === 0) {
    console.log("Loopy")
  }
  else {
    console.log(nums); }
    nums ++;

  }






