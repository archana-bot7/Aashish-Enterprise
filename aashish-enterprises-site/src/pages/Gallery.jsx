import { useLang } from '../LangContext.jsx';
import galleryPhoto1 from '../../assets/gallery-photo-1.png';
import galleryPhoto2 from '../../assets/gallery-photo-2.png';
import galleryTeam from '../../assets/gallery-team.jpg';
import galleryTruck from '../../assets/gallery-truck.jpg';
import galleryWeighing from '../../assets/gallery-weighing.jpg';
import galleryHens from '../../assets/gallery-hens.jpg';
import galleryOffice from '../../assets/gallery-office.jpg';
import galleryWarehouse from '../../assets/gallery-warehouse.jpg';
import galleryUnloading from '../../assets/gallery-unloading.jpg';
import galleryTeam2 from '../../assets/gallery-team2.jpg';
import galleryOwner from '../../assets/gallery-owner.jpg';
import galleryShop from '../../assets/gallery-shop.jpg';
import feederVideo from '../../assets/feeder-video.mp4';
import galleryVideo2 from '../../assets/gallery-video2.mp4';

// Exactly 12 photos → fills 3 rows of 4 columns perfectly
const photos = [
  { src: galleryTeam,      alt: 'Team photo – Aashish Enterprises staff' },
  { src: galleryTeam2,     alt: 'Team in uniform shirts' },
  { src: galleryOwner,     alt: 'Owner with company vehicle' },
  { src: galleryShop,      alt: 'Aashish Enterprises shop front' },
  { src: galleryTruck,     alt: 'Delivery truck loaded with feed bags' },
  { src: galleryUnloading, alt: 'Staff unloading feed bags from truck' },
  { src: galleryWarehouse, alt: 'Feed warehouse stocked with bags' },
  { src: galleryWeighing,  alt: 'Weighing feed bags at the facility' },
  { src: galleryHens,      alt: 'Broiler hens in the poultry house' },
  { src: galleryOffice,    alt: 'Company office' },
  { src: galleryPhoto1,    alt: 'Gallery photo 1' },
  { src: galleryPhoto2,    alt: 'Gallery photo 2' },
];

export default function Gallery() {
  const { t } = useLang();

  return (
    <div className="gallery-fullpage">

      {/* Clean title – no background box */}
      <div className="gallery-header">
        <h1 className="gallery-header-title">{t.gallery.title}</h1>
        <p className="gallery-header-sub">{t.gallery.sub}</p>
      </div>

      {/* Photo rows – 4 columns × 3 rows */}
      <div className="gallery-grid-full">
        {photos.map(({ src, alt }, i) => (
          <div key={i} className="gallery-item">
            <img
              src={src}
              alt={alt}
              className="gallery-img-full"
              loading="lazy"
            />
            <div className="gallery-overlay"><span>{alt}</span></div>
          </div>
        ))}
      </div>

      {/* Video row – 2 videos side by side */}
      <div className="gallery-video-row">
        <div className="gallery-video-cell">
          <video
            className="gallery-video"
            src={feederVideo}
            controls
            playsInline
            preload="metadata"
            aria-label="Farm operations video"
          >
            Your browser does not support video.
          </video>
          <div className="gallery-video-label">🎥 Farm Operations</div>
        </div>

        <div className="gallery-video-cell">
          <video
            className="gallery-video"
            src={galleryVideo2}
            controls
            playsInline
            preload="metadata"
            aria-label="Delivery and logistics video"
          >
            Your browser does not support video.
          </video>
          <div className="gallery-video-label">🎥 Delivery &amp; Logistics</div>
        </div>
      </div>

    </div>
  );
}
