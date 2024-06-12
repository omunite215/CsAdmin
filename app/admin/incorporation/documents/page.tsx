import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { incorporationDocumentsContent } from "@/lib/constants";
import Link from "next/link";

const page = () => {
  return (
    <section className="container py-6">
      <Card>
        <CardHeader>
          <CardTitle>Document Templates</CardTitle>
          <CardDescription>
            This is the preview of Document Templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Sr No.</TableHead>
                <TableHead>Documents</TableHead>
                <TableHead>Templates</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incorporationDocumentsContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <Link
                      href={item.href}
                      className={buttonVariants({ variant: "outline" })}
                      target="_blank"
                    >
                      Preview
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
