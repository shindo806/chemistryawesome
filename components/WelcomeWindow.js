export default function WelcomeWindow() {
  return (
    <section className='welcome-window'>
      <div className='overlay'></div>
      <div className='welcome-window--text'>
        <h3>
          Đây là trang chia sẻ tài liệu tự học môn Hóa Học dành cho học sinh bậc
          THCS và THPT ở Việt Nam. <br />
        </h3>
        <p>
          Mọi thắc mắc xin liên hệ thông qua email:{' '}
          <span className='email'>7teacherx@gmail.com</span>
        </p>
      </div>
    </section>
  );
}
