/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qUPcH6ZSGbn
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function table() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Affiliation</TableHead>
            <TableHead>Research Areas</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Dr. Emily Johnson</TableCell>
            <TableCell>Harvard University</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Quantum Computing</Badge>
                <Badge variant="outline">Cryptography</Badge>
                <Badge variant="outline">Cybersecurity</Badge>
              </div>
            </TableCell>
            <TableCell>
              Dr. Johnson's research focuses on developing secure quantum communication protocols and exploring the
              applications of quantum computing in cryptography.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Prof. Michael Lee</TableCell>
            <TableCell>Stanford University</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Natural Language Processing</Badge>
              </div>
            </TableCell>
            <TableCell>
              Prof. Lee's research focuses on developing advanced machine learning algorithms for computer vision and
              natural language processing applications.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Dr. Samantha Brown</TableCell>
            <TableCell>Massachusetts Institute of Technology (MIT)</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Robotics</Badge>
                <Badge variant="outline">Artificial Intelligence</Badge>
                <Badge variant="outline">Human-Robot Interaction</Badge>
              </div>
            </TableCell>
            <TableCell>
              Dr. Brown's research explores the development of intelligent robots and the interactions between humans
              and robots in various applications.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
