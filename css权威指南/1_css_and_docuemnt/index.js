
function showDetail(t) {
  console.log("asafasfaf",t);

  $('link[title]').each(function() {
    this.disabled = true;
    this.disabled = (this.title != t);
  });
  return false;
}
