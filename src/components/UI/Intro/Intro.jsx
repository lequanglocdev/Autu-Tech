import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import './Intro.css';
const Intro = () => {
    return (
        <Container className="intro-container">
            <Row className="intro-row">
                <Col>
                    <div className="intro-info">
                        <div className="info-content">
                            <h4>Thông tin liên hệ</h4>
                            <div className="info-center">
                                <div className="content-call">
                                    <p>Gọi cho chúng tôi:</p>
                                    <p>+78 201 236</p>
                                </div>
                                <div className="content-location">
                                    <p>Vị trí:</p>
                                    <p>Việt Nam, TPHCM</p>
                                </div>
                                <div className="content-time">
                                    <p>Giờ làm việc</p>
                                    <p>Từ thứ hai - thứ bảy 8;00h - 20:00h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="intro-info">
                        <div className="info-content">
                            <h4>Gửi tin nhắn cho chúng tôi</h4>
                            <Form>
                                <FormControl type="text" placeholder="Email" className="content-input" size="lg" />
                                <br />
                                <FormControl
                                    type="text"
                                    placeholder="Số điện thoại "
                                    className="content-input"
                                    size="lg"
                                />
                                <br />
                                <FormControl
                                    type="text"
                                    placeholder="Nhập tin nhăn"
                                    className="content-input"
                                    size="lg"
                                />
                            </Form>
                            <br />
                            <Button className="content-btn " variant="danger" size="lg">
                                Gửi
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="intro-info">
                        <div className="info-content">
                            <h4>Dịch vụ chăm sóc</h4>
                            <p>
                                Auto Tech - Không chỉ là dịch vụ, mà còn là trải nghiệm. Chúng tôi hiểu rằng chiếc xe
                                không chỉ là phương tiện di chuyển mà còn là người bạn đồng hành của bạn. Vì vậy, chúng
                                tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu. Với không gian thoải mái, dịch vụ
                                chuyên nghiệp và giá cả hợp lý. Auto Tech sẽ mang đến cho bạn những trải nghiệm tuyệt
                                vời nhất."
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;
