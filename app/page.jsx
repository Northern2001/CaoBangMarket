import Image from "next/image";

export default function Home() {
  return (
        <div>
            <div className="container">
                📢 Tiệm đặc sản sạch Cao Bằng 11 tưng bừng khai trương🎉🎉🎉 <br/>

                💚 Tiệm đặc sản sạch Cao Bằng 11 luôn mong muốn mang đến những sản phẩm đa dạng, chất lượng và trải nghiệm tốt nhất cho quý khách. <br/>

                🌈 Xin gửi lời cảm ơn chân thành đến Quý Khách Hàng đã dành sự quan tâm của mình đến Tiệm đặc sản sạch Cao Bằng 11. Hy vọng sẽ luôn nhận được sự ủng hộ của mọi người trên những chặng đường sắp tới.
            </div>
            <br/>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <img
                    src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/356641983_108394372308549_1848358487784148127_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGKn-YSndDeBAprjQTIVvyTsZ8mO7Lq5daxnyY7surl1vagZPLJ_mTCpUHaTwcj8HsMKtx2OoONVoHDlJkE05Mm&_nc_ohc=y0VdESw-fkcAb4k5Hpf&_nc_ht=scontent.fhan17-1.fna&oh=00_AfC450APWvKNawoly6BdqIAXMpdga7kcosPLsAo6cPD1gw&oe=6627FC0E"
                    width={600}
                    height={600}
                    className='justify-center'
                    alt="Picture of the author"
                />
            </div>
        </div>

  );
}
