import React from "react";
import Layout from "../componets/Layout";
import { useRouter } from "next/router";

export default function EventPage() {
  const router = useRouter();
  return <Layout title="DJ Events | Event">{router.query.slug}</Layout>;
}
