//예제2)
// 'input form 텍스트입력' 예제와 세트start
let titleNum = '이름을 입력해주세요'
let nameText = prompt(titleNum);
// input form 텍스트입력 예제와 세트end


      //예제1)
      // let nameText = prompt('이름을 입력해 주세요.');
      // document.body.innerHTML = '<p>대한민국 Mc : '+nameText+'</p>'; //2열과3열비교
      // document.body.innerText = '<p>대한민국 Mc : '+nameText+'</p>';


/*input form 텍스트 입력*/
document.body.innerHTML = '<input type="text" class="name" value="" placeholder="'+nameText+'"/>'
