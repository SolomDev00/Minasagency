import ADBC from '../../assets/payments/adcb.png'
import Bankak from '../../assets/payments/bankak.png'
import Aljazira from '../../assets/payments/al-jazira.png'
import BanqueMisr from '../../assets/payments/banque-misr.png'

const PaymentSection = () => {
  return (
    <section id="category" className="container z-50">
      <div className="flex flex-row-reverse justify-between items-center mt-16 -mb-3">
        <h3 className="text-xl max-sm:text-sm font-semibold">وسائل الدفع</h3>
      </div>
        <div className="flex flex-row items-center justify-center gap-10">
          <img className="w-24" src={ADBC} alt="ADCB" />
          <img className="w-48" src={Bankak} alt="ADCB" />
          <img className="w-24" src={Aljazira} alt="ADCB" />
          <img className="w-24" src={BanqueMisr} alt="ADCB" />
      </div>
    </section>
  );
};

export default PaymentSection;
