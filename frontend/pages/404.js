import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <Layout title="DJ Events | Page Not Found">
      <div className={styles.error}>
        <h1><FaExclamationTriangle /> Not Found</h1>
        <h4>Oops. Some thinng weird happened.</h4>
        <Link href="/">Take me home</Link>
      </div>
    </Layout>
  );
}
