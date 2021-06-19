import React, { useEffect } from "react";
import "../../App.css";
import "../../components/pages/Services.css";
import "../../components/Navbar2";

const Services = ({ setNavbarColor }) => {
  useEffect(() => {
    setNavbarColor("#25505d");
  }, []);
  return (
    <div className="hamash">
      <div className="joftesh">
        <div className="dive1">
          <div className="backkar">
            <div className="btn___">
              <button className="btn_backsi">ورود</button>
            </div>
            <div className="asli">
              <div className="baresi">
                <img src="image/kasb_si.png" />
                <img src="image/kharid-si.png " />
                <img src="image/ahraz_si.png " />
                <img src="image/sabtnam_si.png" />
              </div>
            </div>
          </div>

          <div className="form-signup">
            <div className="form-h1-signup">
              {" "}
              <p className="oshtor"> ساخت حساب کاربری</p>
            </div>
            <div className="form-email-signup">
              {/* <label for="email"></label>

<input type="email" id="email"class name="email-1"
       pattern=".+@globex\.com" size="30" required placeholde="ایمیل"></input>
       <label for="email"> </label>  */}

              <input
                type="email"
                id="email"
                className="email-2"
                pattern=".+@globex\.com"
                size="30"
                required
                placeholder="                                           ایمیل "
              ></input>
              <label for="email"></label>

              <input
                type="email"
                id="email"
                className="email-3"
                pattern=".+@globex\.com"
                size="30"
                required
                placeholder="                                            گذرواژه"
              ></input>
              <label for="email"></label>

              <input
                type="email"
                id="email"
                className="email-4"
                pattern=".+@globex\.com"
                size="30"
                required
                placeholder="                                      تکرار گذرواژه"
              ></input>
              <label for="email"></label>
              <p className="fasele-p">
                با ثبت نام <a href="/"> قوانین و مقررات</a>را می پذیرم
              </p>
              <input
                type="email"
                id="email"
                className="email-5"
                pattern=".+@globex\.com"
                size="30"
                required
                placeholder="کدمعرفی                                        ؟"
              ></input>

              <div className="notrobot">
                <form>
                  <label>
                    <input type="checkbox" name="name" /> I am not robot
                  </label>
                </form>
              </div>
            </div>
            <div className="sabtnam">
              <button className="sabt_google"> ثبت نام</button>
            </div>
            <div className="google_ntb">
              <button className="google_btn">
                <img src="image/google123.png" /> Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
