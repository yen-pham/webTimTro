import React, { Component } from 'react';
import { RightOutlined, FacebookOutlined } from '@ant-design/icons';

class Footer extends Component {
    render() {
        return (
            <div className="dashboard-footer container pt-4">
                <div className="row">
                    <div className="left-footer col-3">
                        <div className="d-flex">
                            <a>Đăng tin</a><RightOutlined />
                        </div>

                    </div>
                    <div className="right-footer col-9 row">
                        <div className="col-4 footer-submenu">
                            <ul className="nav justify-content-center d-block">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Điều khoản thỏa thuận</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Quy chế hoạt động</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Quy định đăng tin</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hướng dẫn - Đăng tin</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hướng dẫn - Tìm kiếm</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-5">
                            <img src="image/logo_TrueMoney.png" alt="BigCo Inc. logo" />
                        </div>
                        <div className="col-3 footer-fb">
                            <div className="d-flex">
                                <a>Theo dõi!</a><FacebookOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 pb-2 d-flex justify-content-center">
                    <p>Thuecanho.com công cụ tìm kiếm hàng đầu Việt Nam về lĩnh vực cho thuê nhà ở © 2017-2021 Thuecanho.com. Trang web có bản quyền hợp pháp.</p>
                </div>
            </div>

        );
    }
}

export default Footer;