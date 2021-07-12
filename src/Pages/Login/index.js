import React from "react";
import "./style.css";
import { connect } from "react-redux";
import firebase from '../../connectFirebase'
import { Redirect } from 'react-router'

const PageLogin = (props) => {
    return (
        <div>
            <section>
                <div className="img-bg">
                    <img src="https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/tao_trang_dang_nhap/hinh_anh_minh_hoa.jpg"
                        alt="Hình Ảnh Minh Họa" />
                </div>
                <div className="noi-dung">
                    <h2>Đăng Nhập</h2>
                    <form action="">
                        <div class="input-form">
                            <span>Tên Người Dùng</span>
                            <input type="text" name="" />
                        </div>
                        <div class="input-form">
                            <span>Mật Khẩu</span>
                            <input type="password" name="" />
                        </div>
                        <div class="nho-dang-nhap">
                            <label><input type="checkbox" name="" /> Nhớ tên tài khoản</label>
                        </div>
                        <div class="input-form">
                            <input type="submit" value="Đăng Nhập" />
                        </div>
                        <div class="input-form">
                            <p>Bạn Chưa Có Tài Khoản? <a href="./register.html">Đăng Ký</a></p>
                        </div>
                    </form>
                    <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                    <ul class="icon-dang-nhap">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default connect(function (state) {
    return { user: state.currentUser }
})(PageLogin);