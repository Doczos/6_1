(function () {
ex1_button.addEventListener("click",function(){
  ex1_content.innerHTML = "0,1,2,3,4,5,6,7,8,9";
})
  const ex2_t=document.querySelector('input')
  const ex2_c = document.getElementById('ex2_content')
 
   
  ex2_t.addEventListener('input', testInfo);
  const re = /^\d{9}$/;
  console.log(re.test(177727538));
      function testInfo(e)
      {
        if (!re.test(e))
        {
          ex2_c.textContent=e.target.value;
        }
        else{
          ex2_c.innerHTML="Good!";
        }
      }
 })();

  