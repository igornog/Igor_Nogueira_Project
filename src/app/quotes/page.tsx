'use client'

import { useEffect, useState } from "react";
import Layout from "./layout";
import React from "react";
import Grid from "../components/quotes/grid";
import LinearIndeterminate from "../components/loader";
import { Stack, Pagination } from "@mui/material";
import Link from "next/link";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ docs: [], pages: 0 });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://the-one-api.dev/v2/quote?limit=9&page=${page}`, {
          headers: {
            Authorization: `Bearer Si5fiVQg7k88ms1A19cG`,
          }
        })
        const json = await response.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [page]);

  return (
    <Layout>

      <div className="flex justify-around items-center w-full">
        <Link href="/" className="duration-300 hover:underline">Back to all movies</Link>
        {/* Title */}
        <h2 className="text-2xl text-center m-8">
          All Quotes
        </h2>
        <Link href="/characters" className="duration-300 hover:underline">See all characters</Link>
      </div>

      {/* Grid */}
      {data.docs.length > 0 ?
        <>
          <Grid data={data.docs} />

          {/* Pagination */}
          <div className="flex justify-center mt-8 mb-16 w-full">
            <Stack spacing={2} className='text-white'>
              <Pagination
                count={data.pages}
                onChange={(event, value) => setPage(value)}
                color="standard"
                className='text-white [&>ul>li>button]:bg-[white]' />
            </Stack>
          </div>
        </>
        : <LinearIndeterminate />}
    </Layout>
  );
}

export default Characters