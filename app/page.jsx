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
                    src="/images/bg.jpg"
                    width={600}
                    height={600}
                    className='justify-center'
                    alt="Picture of the author"
                />
            </div>
        </div>

  );
}
