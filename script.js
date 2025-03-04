document.addEventListener('DOMContentLoaded', function () {
  // 1. 스크롤 시 네비게이션 스타일 변경
  const navbar = document.querySelector('.navigator');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });

  // // 2. "MORE" 버튼 클릭 시 알림
  // const moreButtons = document.querySelectorAll('.more');
  // moreButtons.forEach((button) => {
  //   button.addEventListener('click', function (event) {
  //     event.preventDefault();
  //     alert('프로젝트 상세 페이지는 준비 중입니다!');
  //   });
  // });

  // 3. 프로필 사진 변경 기능
  const profilePicture = document.getElementById('profile-picture');
  if (profilePicture) {
    profilePicture.addEventListener('click', function () {
      profilePicture.src = 'img/profile2.jpeg'; // 다른 이미지로 변경
    });
  }
});
