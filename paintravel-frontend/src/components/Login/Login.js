import React from "react";

function Login() {
  return (
    <div className="loginContainer">
      <div className="login">
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="password" />
          </div>
          <button>로그인</button>
          <button>회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default Login;