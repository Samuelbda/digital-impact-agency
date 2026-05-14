import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function SplineRobot() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute left-1/2 top-1/2 pointer-events-auto"
        style={{
          width: "140vw",
          height: "180vh",
          transform: "translate(-50%, -25%)",
        }}
      >
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/EJWkvn9SEnGg6Ys5/scene.splinecode" />
          </Suspense>
        </ClientOnly>
      </div>
      {/* Hide Spline watermark */}
      <div className="absolute bottom-0 right-0 w-44 h-14 bg-background" />
    </div>
  );
}
