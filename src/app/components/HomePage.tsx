import { HeroSection } from './home/HeroSection';
import { StatsSection } from './home/StatsSection';
import { CapabilitiesSection } from './home/CapabilitiesSection';
import { ProcessSection } from './home/ProcessSection';
import { WorkSection } from './home/WorkSection';
import { CTASection } from './home/CTASection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <CapabilitiesSection />
      <ProcessSection />
      <WorkSection />
      <CTASection />
    </div>
  );
}
