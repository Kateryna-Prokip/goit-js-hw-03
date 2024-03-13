function checkAccess(subType) {
  return(subType === "pro" || subType === "vip");
}
console.log(checkAccess("pro"));
console.log(checkAccess("starter"));
console.log(checkAccess("vip"));
console.log(checkAccess("free"));