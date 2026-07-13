import { FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScriptureImage from "@/assets/scripture.png";
import { YOUTUBE_CHANNEL_URL, SPOTIFY_URL, INSTAGRAM_URL, TWITTER_URL } from "@/lib/socials";

const platforms = [
  { name: "YouTube", href: YOUTUBE_CHANNEL_URL, icon: FaYoutube },
  { name: "Spotify", href: SPOTIFY_URL, icon: FaSpotify },
  { name: "Instagram", href: INSTAGRAM_URL, icon: FaInstagram },
  { name: "X / Twitter", href: TWITTER_URL, icon: FaXTwitter },
];

export function SubscribeBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ScriptureImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#150E2B]/85"></div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
            Subscribe and follow:
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
              >
                <platform.icon className="w-7 h-7 md:w-8 md:h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
