import { motion } from "framer-motion";
import { MapPin, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "@/config/social";

const AreasSection = () => {
  const { t } = useTranslation();

  return (
    <section id="areas" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-foreground rounded-full" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            {t("areas.sectionLabel")}
          </span>
          <h2 className="text-foreground mb-6">
            {t("areas.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("areas.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 hover:border-accent hover:bg-accent/5 shadow-premium hover:shadow-premium-lg transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-accent" />
                <div>
                  <span className="font-bold text-foreground block">Instagram</span>
                  <span className="text-sm text-muted-foreground">@sublime.inesgoncalves</span>
                </div>
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 hover:border-accent hover:bg-accent/5 shadow-premium hover:shadow-premium-lg transition-all duration-300"
              >
                <Facebook className="w-6 h-6 text-accent" />
                <div>
                  <span className="font-bold text-foreground block">Facebook</span>
                  <span className="text-sm text-muted-foreground">Sublime by Inês Gonçalves</span>
                </div>
              </a>
            )}
          </div>

          <div className="inline-flex items-center gap-3 bg-accent/10 text-accent rounded-full px-6 py-3 mt-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{t("areas.notFound")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AreasSection;
