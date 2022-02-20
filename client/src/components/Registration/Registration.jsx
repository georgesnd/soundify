import "./Registration.css";
import React from "react";
import logo2 from "../components/Assets/logo2.png";
import { BsFacebook, BsGoogle } from "react-icons/bs";

function Registration() {
  return (
    <div className="regisWrapper">
      <div className="topIcon">
        <img src={logo2} alt="logo" /> Soundify
      </div>

      <h2>Sign up for free to start listening.</h2>

      <div className="buttonSignup">
        <div className="facebookSignup">
          <a className="signupFacebook" href="http://">
            {" "}
            <BsFacebook className="signupIcon" /> Sign up with Facebook
          </a>
        </div>

        <div className="googleSignup">
          <a className="signupGoogle" href="http://">
            <BsGoogle className="signupIcon" /> Sign up with Google
          </a>
        </div>
      </div>

      <span className="formDivider">
        <p>
          <hr /> or <hr />
        </p>
      </span>

      <form noValidate method="">
        <h2>Sign up with your email address</h2>

        <div className="formGroup">
          <div className="labelGroup">
            <label>What's your email?</label>
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
        </div>

        <div className="formGroup">
          <div className="labelGroup">
            <label for="confirm">Confirm your email</label>
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email again."
              required
            />
            <p>You need to enter your email.</p>
          </div>
        </div>

        <div className="formGroup">
          <div className="labelGroup">
            <label for="password">Create a password</label>
            <input
              type="password"
              aria-invalid="false"
              autocomplete="new-password"
              id="password"
              pattern=".{8,}"
              name="password"
              placeholder="Create a password."
              required=""
              value=""
            />
          </div>
        </div>

        <div className="formGroup">
          <div className="labelGroup">
            <label for="displayname" class="Label">
              What should we call you?
            </label>
            <input
              type="text"
              aria-invalid="false"
              id="displayname"
              name="displayname"
              placeholder="Enter a profile name."
              required=""
              value=""
              className="Input"
            />
            <div>This appears on your profile.</div>
          </div>
        </div>

        <div className="bioData">
          <div className="bioLabelGroup">
            <label className="Label">What's your date of birth?</label>
          </div>

          <div data-testid="dob-parent" className="Row-sc">
            <div data-testid="month" className="monthWrapper">
              <div class="monthFormGroup">
                <div className="monthLabelGroup">
                  <label for="month" class="monthLabel" /> Month
                </div>

                <div className="SelectContainer">
                  <select
                    id="month"
                    name="month"
                    required=""
                    aria-invalid="false"
                    className="Select"
                  >
                    <option selected="" value="">
                      Month
                    </option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  {/* <svg
                    role="img"
                    focusable="false"
                    height="16"
                    width="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="Svg-ytk21e-0 kqPsGr SelectArrow-sc-12qvh0d-0 bSBwaw"
                  >
                    <polyline
                      points="20 8 12 17 4 8"
                      fill="none"
                      stroke="#181818"
                    ></polyline>
                  </svg> */}
                </div>
              </div>
            </div>
            <div data-testid="day" class="Day">
              <div class="dayFormGroup">
                <div class="dayLabelGroup">
                  <label for="day" class="dayLabel">
                    Day
                  </label>
                </div>
                <input
                  type="text"
                  aria-invalid="false"
                  id="day"
                  inputmode="numeric"
                  maxlength="2"
                  name="day"
                  pattern="((0?[1-9])|([12][0-9])|(3[01]))"
                  placeholder="DD"
                  required=""
                  value=""
                  className="Input"
                />
              </div>
            </div>
            <br />
            <div data-testid="year" className="Year">
              <div className="yearFormGroup">
                <div className="yearLabelGroup">
                  <label for="year" className="Label">
                    Year
                  </label>
                </div>
                <input
                  type="text"
                  aria-invalid="false"
                  id="year"
                  inputmode="numeric"
                  maxlength="4"
                  name="year"
                  pattern="(19[0-9]{2})|(200)[0-9]"
                  placeholder="YYYY"
                  required=""
                  value=""
                  className="yearInput"
                />
              </div>
            </div>
          </div>
          <div data-testid="dob-error-messages-parent"></div>
        </div>

        <fieldset role="radiogroup" class="radioGroup">
          <legend class="radioLabelGroup">What's your gender?</legend>
          <div className="radioInlineGroup">
            <div className="Radio">
              <input
                type="radio"
                id="genderOptionMale"
                name="gender"
                required=""
                value="male"
              //  className="VisuallyHidden"
              />
              <label for="gender_option_male" className="radioLabel">
                <span className="Indicator"></span>
                <span className="TextForLabel">Male</span>
              </label>
            </div>
            <div className="Radio">
              <input
                type="radio"
                id="genderOptionFemale"
                name="gender"
                required=""
                value="female"
                // className="VisuallyHidden"
              />
              <label for="gender_option_female" className="radioLabel">
                <span class="Indicator"></span>
                <span className="TextForLabel">Female</span>
              </label>
            </div>
            <div className="Radio">
              <input
                type="radio"
                id="gender_option_nonbinary"
                name="gender"
                required=""
                value="neutral"
                // className="VisuallyHidden"
              />
              <label for="gender_option_nonbinary" className="radioLabel">
                <span className="Indicator"></span>
                <span className="TextForLabel">Non-binary</span>
              </label>
            </div>
          </div>
        </fieldset>
        <div class="Group-u9bcx5-0 bXxIjv">
          <div class="Checkbox">
            <input
              type="checkbox"
              id="third-party-checkbox"
              name="thirdParty"
            />
            <label for="third-party-checkbox" class="Label">
              <span class="Indicator"></span>
              <span class="TextForLabel">
                <span class="LinkContainer">
                  Share my registration data with Spotify's content providers
                  for marketing purposes.
                </span>
              </span>
            </label>
          </div>
        </div>

        <div class="EmailFormCenter">
          <p class="TypeElement">
            <span class="LinkContainerP">
              By clicking on sign-up, you agree to Spotify's{" "}
              <a
                href="/us/legal/end-user-agreement/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions of Use
              </a>
              .
            </span>
          </p>
          <p class="TypeElement">
            <span class="LinkContainer">
              To learn more about how Spotify collects, uses, shares and
              protects your personal data, please see{" "}
              <a
                href="/us/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify's Privacy Policy
              </a>
              .
            </span>
          </p>
          <div class="SignupButton__ButtonContainerSignup">
            <button type="submit" class="Button">
              <div class="ButtonInner">Sign up</div>
              <div class="ButtonFocus"></div>
            </button>
          </div>
          <p class="TypeElement">
            <span class="LinkContainer">
              Have an account?{" "}
              <a href="https://accounts.spotify.com?continue=https%3A%2F%2Fwww.spotify.com%2Fus%2Fdownload%2F">
                Log in
              </a>
              .
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Registration;
