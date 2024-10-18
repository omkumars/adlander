// import React from "react";

// export default function Testimonial() {
//   return (
//     <div className="w-[949px] h-[595.60px] relative bg-[#302863] rounded-2xl">
//       <div className="w-[357.52px] h-[383.88px] left-[294.61px] top-[146.63px] absolute">
//         <img
//           className="w-[84.03px] h-[84.03px] left-[129.33px] top-[-0px] absolute rounded-full"
//           src=""
//         />
//         <div className="left-[121.50px] top-[99.68px] absolute text-center text-[#cfcfcf] text-xl font-bold font-['Lato']">
//           Kajal Singh
//         </div>
//         <div className="left-[111.86px] top-[129.33px] absolute text-center text-[#cfcfcf] text-[14.83px] font-normal font-['Inter']">
//           Graphic designer
//         </div>
//         <div className="w-[285.03px] h-[140.87px] left-[28.83px] top-[188.65px] absolute text-center text-[#cfcfcf] text-xs font-normal font-['Inter']">
//           As a graphic designer transitioning to UX, I found this workshop
//           incredibly valuable. It provided a seamless bridge between my existing
//           skills and the world of user experience. The practical exercises were
//           particularly enlightening, and the feedback I received on my portfolio
//           was invaluable. I now feel more confident in applying UX principles to
//           my design work.
//         </div>
//         <div className="w-[29.66px] h-[29.66px] left-[156.52px] top-[153.22px] absolute" />
//       </div>
//       <div className="w-[282.77px] h-[311.24px] left-[-1.65px] top-[189.47px] absolute">
//         <img
//           className="w-[62.61px] h-[62.61px] left-[125.73px] top-[0.75px] absolute rounded-full"
//           src=""
//         />
//         <div className="left-[137.31px] top-[72.42px] absolute text-center text-[#cfcfcf] text-base font-bold font-['Inter']">
//           Aritri
//         </div>
//         <div className="left-[128.73px] top-[93.83px] absolute text-center text-[#cfcfcf] text-[9.89px] font-normal font-['Inter']">
//           UX Student
//         </div>
//         <div className="w-[190px] h-[82px] left-[61.15px] top-[129.83px] absolute text-center text-[#cfcfcf] text-[8px] font-normal font-['Inter']">
//           The UX Design workshop exceeded my expectations! The hands-on
//           activities were both challenging and insightful, allowing me to apply
//           theoretical knowledge in a practical context. I highly recommend this
//           workshop to anyone serious about mastering UX design.
//         </div>
//         <div className="w-[18.12px] h-[18.12px] left-[147.97px] top-[108.66px] absolute" />
//       </div>
//       <div className="w-[282.77px] h-[311.24px] left-[667.27px] top-[188.65px] absolute">
//         <img
//           className="w-[62.61px] h-[62.61px] left-[157.04px] top-[0.75px] absolute origin-top-left rounded-full"
//           src=""
//         />
//         <div className="left-[104.14px] top-[72.49px] absolute text-center text-[#cfcfcf] text-base font-bold font-['Inter']">
//           Sudip{" "}
//         </div>
//         <div className="left-[93.56px] top-[93.91px] absolute text-center text-[#cfcfcf] text-[9.89px] font-normal font-['Inter']">
//           UX Developer
//         </div>
//         <div className="w-[189.47px] h-[148.28px] left-[31.30px] top-[130.16px] absolute text-center text-[#cfcfcf] text-[8px] font-normal font-['Lato']">
//           Having attended multiple workshops in the past, I can confidently say
//           that this UX Design workshop stands out. The instructors' expertise
//           was evident, and the content was presented in a way that was easy to
//           grasp.The networking opportunities were an unexpected bonus,
//           connecting me with professionals who share my passion for creating
//           exceptional user experiences.
//         </div>
//         <div className="w-[18.12px] h-[18.12px] left-[117.80px] top-[108.74px] absolute" />
//       </div>
//       <div className="w-[85.67px] h-[13.18px] left-[431.66px] top-[45.31px] absolute">
//         <div className="w-[13.18px] h-[13.18px] left-0 top-0 absolute bg-gradient-to-b from-[#9740ed] to-[#8baff9] rounded-full" />
//         <div className="w-[6.59px] h-[6.59px] left-[22.24px] top-[3.30px] absolute bg-white rounded-full" />
//         <div className="w-[6.59px] h-[6.59px] left-[41.19px] top-[3.30px] absolute bg-white rounded-full" />
//         <div className="w-[6.59px] h-[6.59px] left-[60.14px] top-[3.30px] absolute bg-white rounded-full" />
//         <div className="w-[6.59px] h-[6.59px] left-[79.08px] top-[3.30px] absolute bg-white rounded-full" />
//         <div className="w-[6.59px] h-[6.59px] left-[3.30px] top-[3.30px] absolute bg-white rounded-full" />
//       </div>
//     </div>
//   );
// }

import React from "react";

function Testimonial({ name, title, quote, src }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-purple-900 to-purple-700 p-10 shadow-2xl">
      <div className="flex items-center gap-4">
        <img
          src={src}
          alt={"Testimonial image"}
          className="w-16 h-16 rounded-full"
        />

        <div>
          <h2 className="text-lg font-bold text-white font-['Inter']">
            {name}
          </h2>

          <p className="text-sm text-gray-400 font-normal font-['Inter']">
            {title}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-300 font-normal font-['Inter']">{quote}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Testimonial
          name="Aritri"
          title="UX Student"
          src="https://s3-alpha-sig.figma.com/img/26b2/0f5e/854cb929f5296203b9918776c3d43194?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KqfiO0e7~fpk5Vjucm1YSwjvQEkq56lvjSDz6WBucjQw72KxJijt3tOII6qxC5wxQb-xKIztQ-07r-tuwHZ94d3h~xCDnf5nS89UJtMWemWM5FUDW6pRc1b405dQEIQ2VUfywza5GTVnx6pjpJNAVCgUH4IgHdj5rmF1o1KMU-CIpHTMEaRScOjf2FXnlSq6oqM7bGsfMkL-kQ2Jdp3240x5MnpyUYM-YAB8y1DYTZXGZJec9d3ZMn8WcIFFoxmv2-poz9Vhca1lwRf6IxNdY1Sr4Ju5Ouxrv2Pq66hqsTtIgqOrU4Qrzxg5J1eAkcFWvBfM30Evq7ILXfLrAhMbLg__"
          quote="The UX Design workshop exceeded my expectations! The hands-on activities were both challenging and insightful, allowing me to apply theoretical knowledge in a practical context. I highly recommend this workshop to anyone serious about mastering UX design."
        />

        <Testimonial
          name="Kajal Singh"
          src="https://s3-alpha-sig.figma.com/img/2cc3/caee/34882e97a0c68cb9b1df5ad0d038dde6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZ7bS~2xlpVhYqE5gbJeUsXYUaBmW4GLddbnrdef5Dtm38k~Q~47nQLpx98oxUgBGjtcFnF9PevW0Y3-gkQtD5qRaDBfwJ6MfRx~TAVXzu5zcKvJJhQDCNWlgds1G2bra-R8rrtz-maGMpV0~a84I9QZC3Z8~b1htq3bbzvREL3QwLuU8M5jGINdIHctL4Dg~Ej~5dIMDWbEHBNtfe0XPOPGh7Hgvrhlpsar~Ch95WC3FyfuXbibnNMb4OTwlIn6EfGAOpg7JBNzQpm8FDWgfyMWx~bcTM4fKMlPX4qo-8zCa759fOV5tlYecuWEmwtKpFcyFX5uoEVbf5F9L4tZBQ__"
          title="Graphic designer"
          quote="As a graphic designer transitioning to UX, I found this workshop incredibly valuable. It provided a seamless bridge between my existing skills and the world of user experience. The practical exercises were particularly enlightening, and the feedback I received on my portfolio was invaluable. I now feel more confident in applying UX principles to my design work."
        />

        <Testimonial
          name="Sudip"
          title="UX Developer"
          src="https://s3-alpha-sig.figma.com/img/6e55/9d64/3c23cd99c63a5979926675edffcce662?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8n3rK7qYTaDshPtqYieM7JR-qoMgWZDIcHX05OtIf8tKin6JhsQGecufVIWvo5d1MGr~G3zhiSrAFpVn~sIGRy~plefdq7cWwMHDvqkPduyFdT3ZDDcj~uU5Ll7mxnFzkG-rqggH5PKCeXdFJ1MpKiKsaOV5D4WoAy0NwIPeQhPDh3IcOL6FvFkDWyrWcapMAnL3TOV8NB47yurUyoT3BQ7QhVJzEV5XKESwFe8QI8TYa2TLBBxivZfMphfMOQk8APzuZ99EgEb7QTBVJx~4xUsQ5ZDpbUgFVXWVRi-ZWXUBiF4KOw8A6op-KAHrtjAQcwZAx5nvV05X8-DRKpUsg__"
          quote="Having attended multiple workshops in the past, I can confidently say that this UX Design workshop stands out. The instructors' expertise, the well-structured curriculum, and the supportive community all contributed to an exceptional learning experience. I've already started applying the skills I learned to my current projects, and I'm excited to continue growing as a UX designer."
        />
      </div>
    </div>
  );
}

export default Testimonials;
