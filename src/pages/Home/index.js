import React from 'react'
import Slider from 'react-slick'
import { Title, Container } from 'components'
import {
	StarBorder,
	LocalAtm,
	Engineering,
	Construction,
	Explore,
	CalendarMonth,
	Star,
} from '@mui/icons-material'
import './styles.css'

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1500,
	pauseOnHover: false,
}

const mock = [
	{
		title: 'Chất Lượng Uy Tín',
		subtitle: 'DỊCH VỤ SỬA CHỮA UY TÍN, CHẤT LƯỢNG CAO. ĐẢM BẢO 100% HÀI LÒNG QUÝ KHÁCH.',
		icon: <StarBorder />,
	},
	{
		title: 'Chi Phí Tốt Nhất',
		subtitle:
			'KHÁCH HÀNG ĐƯỢC HỖ TRỢ 10-20% CHI PHÍ. CAM KẾT GIÁ THẤP NHẤT, ĐẢM BẢO 100% CHẤT LƯỢNG.',
		icon: <LocalAtm />,
	},
	{
		title: 'Kỹ Thuật Chuyên Môn',
		subtitle: 'THỢ GIỎI, NHIỀU NĂM KINH NGHIỆM TRONG LĨNH VỰC SỬA CHỮA.',
		icon: <Engineering />,
	},
	{
		title: 'Linh Kiện Chính Hãng',
		subtitle: '100% LINH KIỆN CHÍNH HÃNG TỪ NSX, TUYỆT ĐỐI KHÔNG DÙNG HÀNG GIẢ HAY KÉM CHẤT LƯỢNG.',
		icon: <Construction />,
	},
	{
		title: 'Hỗ Trợ Nhanh Chóng',
		subtitle:
			'SẼ CÓ MẶT SAU 30 PHÚT ĐỂ KIỂM TRA MIỄN PHÍ VÀ TƯ VẤN GIẢI PHÁP TỐI ƯU, TIẾT KIỆM CHI PHÍ.',
		icon: <Explore />,
	},
	{
		title: 'Bảo Hành Lâu Dài',
		subtitle:
			'BẢO HÀNH LÂU DÀI TỪ 06 THÁNG TRỞ LÊN, TRÁCH NHIỆM CAO, SẼ CÓ MẶT NHANH CHÓNG ĐỂ XỬ LÝ.',
		icon: <CalendarMonth />,
	},
]

const mock1 = [
	'Dịch vụ sửa chất lượng cao, nhanh chóng, giá rẻ đến tận nhà tất cả các Quận TP.HCM.',
	'Kiểm tra và báo giá miễn phí trước khi sửa chữa. Sửa được tất cả các lỗi và các hãng.',
	'Đội ngũ chuyên viên kỹ thuật tay nghề cao và giàu kinh nghiệm. Hỗ trợ nhiệt tình, nhanh chóng.',
	'Chúng tôi có 15 chi nhánh khắp các quận huyện TPHCM. Có mặt trong vòng 30 phút liên hệ.',
]

const mock2 = [
	'Dịch vụ với chi phí sửa chữa thấp nhất HCM. Quy trình làm việc chuyên nghiệp.',
	'Hỗ trợ khách hàng nhanh chóng 24/7. Làm việc ngoài giờ nếu quý khách hàng có yêu cầu.',
	'Cam kết thay thế linh kiện, thiết bị chính hãng cao cấp.',
	'Bảo hành chính hãng dài hạn cho tất cả các bệnh. Dịch vụ an toàn, uy tín.',
]

const mock3 = [
	{
		name: 'Nguyễn Văn Ánh',
		image: 'customer-1',
		message:
			'Dịch vụ chất lượng tận nhà, giá cả phải chăng. Tôi cảm thấy rất ưng ý. Cảm ơn toàn thể quý công ty.',
	},
	{
		name: 'Nguyễn Thị Hồng',
		image: 'customer-2',
		message:
			'Đã trải nghiệm dịch vụ sửa tại công ty. Nhìn chung khá hài lòng về phong cách phục vụ và dịch vụ sửa chữa.',
	},
	{
		name: 'Lê Văn Hoàng',
		image: 'customer-3',
		message:
			'Rất may mắn gặp được công ty. Tôi khá hài lòng về chất lượng phục vụ. Lần sau tôi sẽ tiếp tục ủng hộ.',
	},
]

const mock4 = [
	'258 NƠ TRANG LONG P.8 Q.BÌNH THẠNH TPHCM',
	'156 NGUYỄN VĂN HƯỞNG P.THẢO ĐIỀN Q.2 TPHCM',
	'149 ĐINH TIÊN HOÀNG P.ĐA KAO Q.1 TPHCM',
	'167A PHAN VĂN HỚN BÀ ĐIỄM H.HOC MÔN',
	'169 QUANG TRUNG P.8 Q.GÒ VẤP TPHCM',
	'345/1 PHẠM HÙNG Q.8 TPHCM',
]

const mock5 = [
	'152B TÂN KỲ TÂN QUÝ P.TÂN QUÝ Q,TÂN PHÚ',
	'227 LÊ VĂN QUẾ P.BÌNH TRỊ ĐÔNG A – Q.BÌNH TÂN',
	'235A XA LỘ HÀ NỘI   QUẬN 9 -TPHCM',
	'788 LÊ VĂN KHƯƠNG P.TCH Q.12',
	'119 ĐƯỜNG 3/2 P.8 Q.10 TPHCM',
]

export const Home = () => {
	return (
		<div id='banner' className='home'>
			<div className='banner'>
				<Slider {...settings}>
					<img className='banner-1' src={require('../../assets/banner-1.jpg')} alt='Banner 1' />
					<img className='banner-2' src={require('../../assets/banner2.jpg')} alt='Banner 2' />
					<img className='banner-3' src={require('../../assets/banner3.jpeg')} alt='Banner 3' />
				</Slider>
			</div>
			<div id='gioi-thieu' className='intro'>
				<div className='content'>
					<span className='title'>TRUNG TÂM BẢO HÀNH VÀ SỬA CHỮA TIVI SONY</span>
					<ul className='list-content'>
						<li>
							<img className='icon' src={require('../../assets/icon-1.png')} alt='icon' />
							TRUNG TÂM BẢO HÀNH VÀ SỬA CHỮA TIVI SONY chuyên cung cấp dịch vụ sửa , khắc phục các
							lỗi và hư hỏng tại nhà từ những sự cố nhỏ cho đến những hư hỏng nặng.
						</li>
						<li>
							<img className='icon' src={require('../../assets/icon-1.png')} alt='icon' />
							Chúng tôi sẽ cho kĩ thuật đến tận nhà kiểm tra và báo chi phí trước khi thực hiện sửa
							chữa. SONY thay thế linh kiện chính hãng chất lượng cao với giá rẻ phải chăng.
						</li>
						<li>
							<img className='icon' src={require('../../assets/icon-1.png')} alt='icon' />
							Có mặt nhanh chóng tất cả các quận tại HCM với đội ngũ kĩ sư chuyên nghiệp và rộng
							khắp thành phố. Quận 1, quận 2, quận 3, quận 4, Tân Bình, Tân Phú, Bình Thạnh, Gò Vấp…
						</li>
						<li>
							<img className='icon' src={require('../../assets/icon-1.png')} alt='icon' />
							Chúng tôi bảo hành cho tất cả dịch vụ sửa chữa tại nhà dài hạn. Khi khách hàng gặp sự
							cố, chúng tôi sẽ có mặt ngay để thực hiện sửa chữa hay thực hiện bảo hành.
						</li>
					</ul>
				</div>
				<img className='right-img' src={require('../../assets/tivi2.jpg')} alt='Tivi' />
			</div>
			<div id='gioi-thieu-part2' className='box-intro'>
				<img className='' src={require('../../assets/tivi.png')} alt='Tivi' />
				<div className='content'>
					<div className='content-title'>
						<span className='title'>TRUNG TÂM BẢO HÀNH VÀ SỬA CHỮA TIVI SONY</span>
					</div>
					<ul className='list-content'>
						<li>
							Hiện nay, trên địa bàn Thành phố Hồ Chí Minh có rất nhiều cơ sở sửa chữa tivi, tuy
							nhiên không phải địa chỉ nào cũng đáng tin cậy và tay nghề cao. Do vậy, việc lựa chọn
							xem địa chỉ nào sửa tivi giá rẻ mà lại chuyên nghiệp là điều không phải dễ. Dịch vụ
							sửa tivi tại nhà Hồ Chí Minh được mở ra đáp ứng nhu cầu của rất nhiều khách hàng. Và
							quan trọng nhất là sự tiện lợi.
						</li>
						<li className='main-text'>
							Đơn vị chúng tôi có thể sửa được tất cả các lỗi từ đơn giản đến phức tạp như: tivi
							đang chạy tự dưng tắt, bật nguồn không lên, hiện tượng màn hình bị trắng, loang màu,
							có đốm sáng, bị sọc đứng, sọc ngang, hình mờ, hình bị nhiễu, tivi có tiếng không có
							hình,…Sửa tivi tại nhà Hồ Chí Minh đã trở thành dịch vụ phổ biến, đáp ứng nhu cầu sửa
							chữa tivi của các khách hàng một cách nhanh chóng và tiện lợi.
						</li>
						<li>
							<h1>Hotline: 0818002026</h1>
						</li>
					</ul>
				</div>
			</div>
			<Container>
				<div id='sua-tivi-sony' className='advantages'>
					<Title
						titleText={'LÝ DO NÊN CHỌN TRUNG TÂM BẢO HÀNH VÀ SỬA CHỮA SONY'}
						backgroundColor='white'
					/>

					<div className='advantages-grid'>
						{mock.map((item, index) => (
							<div key={index} className='item'>
								<div>{item.icon}</div>
								<span className='title'>{item.title}</span>
								<div className='subtitle'>{item.subtitle}</div>
							</div>
						))}
					</div>
				</div>
			</Container>
			<Container>
				<Title titleText={'LỢI ÍCH KHI KHÁCH CHỌN DỊCH VỤ'} backgroundColor='white' />
				<div className='advantages-flex'>
					<div className='part left'>
						{mock1.map((item, index) => (
							<div key={index} className='item'>
								{item}
							</div>
						))}
					</div>
					<img className='middle' src={require('../../assets/image.jpeg')} alt='-' />
					<div className='part right'>
						{mock2.map((item, index) => (
							<div key={index} className='item'>
								{item}
							</div>
						))}
					</div>
				</div>
			</Container>
			<div id='quy-trinh' className='choice'>
				<Container>
					<Title titleText={'QUY TRÌNH LÀM VIỆC CỦA CHÚNG TÔI'} backgroundColor='transparent' />
				</Container>
				<div className='choice-image'>
					<img src={require('../../assets/image-1.png')} alt='Choice' />
				</div>
				<div className='btn-register'>ĐĂNG KÝ DỊCH VỤ</div>
			</div>
			<div className='customers'>
				<Container>
					<Title titleText={'Ý KIẾN KHÁCH HÀNG'} backgroundColor='transparent' color='white' />
					<div className='customers-list'>
						{mock3.map((item, index) => (
							<div key={index} className='item'>
								<img src={require(`../../assets/${item.image}.jpeg`)} alt='Customer' />
								<div className='item-right'>
									<div className='rating'>
										<Star />
										<Star />
										<Star />
										<Star />
										<Star />
									</div>
									<span className='name'>{item.name}</span>
									<span className='message'>{item.message}</span>
								</div>
							</div>
						))}
					</div>
				</Container>
			</div>
			<div id='lien-he' className='footer'>
				<Container>
					<span className='title'>
						LIÊN HỆ NGAY VỚI TRUNG TÂM SAMSUNG KHI THIẾT BỊ CỦA BẠN GẶP SỰ CỐ
					</span>
					<div className='hotline'>
						<span>Hotline: 0818002026</span>
					</div>
					<div className='location'>
						<div className='left'>
							<span className='subtitle'>TRUNG TÂM SỬA CHỮA – BẢO HÀNH TIVI SONY</span>
							{mock4.map((item, index) => (
								<span className='item' key={index}>
									{item}
								</span>
							))}
						</div>
						<div className='right'>
							<span className='subtitle'>CÁC CHI NHÁNH KHÁC:</span>
							{mock5.map((item, index) => (
								<span className='item' key={index}>
									{item}
								</span>
							))}
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}
