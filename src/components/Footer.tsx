import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const phoneNumber = "+90 541 676 5318";
  const whatsappNumber = "+90 541 676 5318";
  const email = "bulutyolyardim35@gmail.com";

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Balıkesir Bulut Oto Çekici</h3>
            <p className="text-sm leading-relaxed">
              Balıkesir Oto Çekici olarak, 7/24 profesyonel yol yardım ve oto çekici hizmetleri sunuyoruz. 
              Deneyimli ekibimiz ve modern ekipmanlarımızla Balıkesir'in tüm ilçelerinde hizmetinizdeyiz. 
            </p>
            <div className="flex space-x-4">
              <a
                href={`tel:${phoneNumber}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FaPhone className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                className="text-green-400 hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${email}`}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/balikesir-yol-yardim" className="hover:text-white transition-colors">
                  Balıkesir Yol Yardım
                </Link>
              </li>
              <li>
                <Link href="/balikesir-oto-cekici" className="hover:text-white transition-colors">
                  Balıkesir Oto Çekici
                </Link>
              </li>
              <li>
                <Link href="/balikesir-arac-kurtarma" className="hover:text-white transition-colors">
                  Balıkesir Araç Kurtarma
                </Link>
              </li>
              <li>
                <Link href="/oto-kurtarma-balikesir" className="hover:text-white transition-colors">
                  Oto Kurtarma Balıkesir
                </Link>
              </li>
              <li>
                <Link href="/oto-cekici-balikesir" className="hover:text-white transition-colors">
                  Oto Çekici Balıkesir
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-blue-400" />
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
                  Bize Ulaşın
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-green-400" />
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konum Gönder
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-red-400" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-yellow-400" />
                <span>Balıkesir, Türkiye</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Çalışma Saatleri</h3>
            <div className="space-y-2">
              <p className="text-sm">Pazartesi - Cuma: 7/24</p>
              <p className="text-sm">Cumartesi: 7/24</p>
              <p className="text-sm">Pazar: 7/24</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Balıkesir Bulut Oto Çekici. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 