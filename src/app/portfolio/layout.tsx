import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | ECO BAG Tunisie - Nos Réalisations",
  description: "Découvrez les réalisations d'ECO BAG Tunisie : sacs shopping, emballages pharmacy, housses de protection. Portfolio complet de nos produits écologiques certifiés.",
  alternates: {
    canonical: "https://ecobagtn.tn/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
