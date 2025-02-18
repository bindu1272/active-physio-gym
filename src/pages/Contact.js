import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import {Button, Form, Input} from "antd";
import {trackPageViewInGoogle} from "../setup/GoogleSetUp";
import validator from "validator";
import {coreApi} from "../setup/configureAxios";


function Index() {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageViewInGoogle();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (values) => {
    console.log(values);
    setSuccess("");
    let flag = false,
      specific = false;
    Object.keys(values).map((key) => {
      if (!values[key] || !values[key].trim()) {
        flag = true;
      } else if (key == "Email") {
        if (!validator.isEmail(values[key])) {
          specific = true;
          flag = true;
          setError("Invalid Email");
        }
      } else if (key == "Phone Number") {
        if (!validator.isMobilePhone(values[key]) || values[key].length < 10) {
          specific = true;
          flag = true;
          setError("Invalid Phone number");
        }
      }
    });

    if (!flag) {
      setLoading(true);
      values["type"] = "activeGymContactUs";
      coreApi
        .post("/email/send", values)
        .then((response) => {
          console.log("response is", response);
          setLoading(false);
          form.resetFields();
          setSuccess(
            "Your request has been received, we will contact you soon"
          );
          setError("");
        })
        .catch((err) => {
          console.log("got error---", err);
          setLoading(false);
          setError(err.message);
          setSuccess("");
        });
    } else if (!specific) {
      setError("All fields are mandatory");
    }
  };
  return (
    <>
      <Header />
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="bread-crumb">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span> / </span>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_page_section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 form-part white-bg">
              <div class="sec-title mb-45">
                <h2 class="title mb-5">Get In Touch</h2>
              </div>
              <div id="form-messages">
                {error && (
                  <div className="col-md-12 error-msg">
                    <i className="fa fa-times-circle"></i> {error}
                  </div>
                )}
                {success && (
                  <div className="col-md-12 success-msg">
                    <i className="fa fa-check"></i> {success}
                  </div>
                )}
              </div>
              <Form
                // {...layout}
                name="basic"
                vertical
                form={form}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                // onFinishFailed={onFinishFailed}
              >
                <div className="d-flex" style={{ flexWrap: "wrap" }}>
                  <Form.Item
                    label="First Name"
                    name="First Name"
                    className="col-sm-6 pr-2"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name!",
                      },
                    ]}
                  >
                    <Input size={"large"} />
                  </Form.Item>
                  <Form.Item
                    className="col-sm-6"
                    label="Last Name"
                    name="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last Name!",
                      },
                    ]}
                  >
                    <Input size={"large"} />
                  </Form.Item>

                  <Form.Item
                    className="col-sm-6"
                    label="Email"
                    name="Email"
                    rules={[
                      { required: true, message: "Please input your Email!" },
                    ]}
                  >
                    <Input size={"large"} />
                  </Form.Item>

                  <Form.Item
                    className="col-sm-6"
                    label="Phone Number"
                    name="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone Number!",
                      },
                    ]}
                  >
                    <Input size={"large"} />
                  </Form.Item>
                  <Form.Item
                    name={"Message"}
                    label="Message"
                    className="col-sm-12"
                    rules={[
                      { required: true, message: "Please input your message!" },
                    ]}
                  >
                    <Input.TextArea autoSize={{ minRows: 4 }} />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button type="primary" htmlType="submit" disabled={loading}>
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div class="col-lg-4 pl-0 md-pr-0 md-order-first">
              <div class="contact-info">
                <h3 class="title">Contact Info</h3>
                <div class="info-wrap mb-20">
                  <div class="icon-part">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div class="content-part">
                    <h4>Office Address</h4>
                    Located at 208 Parramatta Road, Homebush, NSW, 2140
                  </div>
                </div>
                <div class="info-wrap mb-20">
                  <div class="icon-part">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div class="content-part">
                    <h4>Telephone</h4>
                    <h6 style={{color:"#fff", fontSize:20, lineHeight:"normal", marginBottom:0, fontWeight:"bold"}}>
                      P: <a href="tel:0478496444">0478 496 444</a>
                    </h6>

                  </div>
                </div>
                <div class="info-wrap mb-20">
                  <div class="icon-part">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                  <div class="content-part">
                    <h4>Mail Us</h4>
                    <p>
                      E:{" "}
                      <a href="mailto:info@activephysiogym.com">
                        info@activephysiogym.com
                      </a>
                    </p>
                  </div>
                </div>
                <div class="info-wrap">
                  <div class="icon-part">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                  <div class="content-part">
                    <h4>Trading Hours</h4>
                    <span>Monday – Sunday</span> &nbsp; &nbsp;
                    <span>5:00am – 9:00pm</span>
                  </div>
                </div>
                <div class="info-wrap">
                  <div class="icon-part">
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                  </div>
                  <div class="content-part">
                    <h4>Social Media</h4>
                    <a href="https://www.instagram.com/activephysiogym" target="_blank">   <i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a> &nbsp; &nbsp;
                    <a href="https://www.facebook.com/activephysiogym " target="_blank"> <i class="fa fa-facebook-official" aria-hidden="true"></i>  Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
