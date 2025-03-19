document.addEventListener('DOMContentLoaded', function () {
  // 1. 프로필 사진 변경 기능
  const profilePicture = document.getElementById('profile-picture');
  if (profilePicture) {
    profilePicture.addEventListener('click', function () {
      profilePicture.src = 'img/profile2.jpeg'; // 다른 이미지로 변경
    });
  }
});

// 스크롤 진행 바 생성
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '5px';
progressBar.style.backgroundColor = '#ff5733'; // 색상 (원하는 색으로 변경 가능)
progressBar.style.width = '0%';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar);

// 스크롤 이벤트 추가
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop; // 현재 스크롤 위치
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight; // 전체 스크롤 가능 거리
  const scrollPercentage = (scrollTop / scrollHeight) * 100; // 스크롤 퍼센트 계산

  progressBar.style.width = scrollPercentage + '%'; // 진행 바 길이 변경
});
