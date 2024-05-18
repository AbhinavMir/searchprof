"use client";

import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

const researchersData = [
  {
    name: "Dr. Emily Johnson",
    position: "Professor",
    affiliation: "Harvard University",
    homepage: "https://scholar.harvard.edu/emilyjohnson",
    researchAreas: ["Quantum Computing", "Cryptography", "Cybersecurity"]
  },
  {
    name: "Prof. Michael Lee",
    position: "Associate Professor",
    affiliation: "Stanford University",
    homepage: "https://scholar.google.com/michaellee",
    researchAreas: ["Machine Learning", "Computer Vision", "Natural Language Processing"]
  },
  {
    name: "Dr. Samantha Brown",
    position: "Assistant Professor",
    affiliation: "MIT",
    homepage: "https://scholar.google.com/samanthabrown",
    researchAreas: ["Robotics", "Artificial Intelligence", "Human-Robot Interaction"]
  }
];

type Researcher = {
  name: string;
  position: string;
  affiliation: string;
  homepage: string;
  researchAreas: string[];
};

export function NewTable() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredResearchers, setFilteredResearchers] = useState<Researcher[]>(researchersData);

  useEffect(() => {
    let filtered = researchersData.filter(researcher =>
      researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      researcher.affiliation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      researcher.researchAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (selectedFilters.length > 0) {
      filtered = filtered.filter(researcher =>
        selectedFilters.every(filter => researcher.researchAreas.includes(filter))
      );
    }

    setFilteredResearchers(filtered);
  }, [searchTerm, selectedFilters]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className="w-full overflow-auto p-20">
      <div className="flex justify-between items-center mb-4">
        <Input
          className="w-64"
          placeholder="Search researchers..."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="shrink-0" variant="outline">
              <FilterIcon className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Research Areas</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["Quantum Computing", "Cryptography", "Cybersecurity", "Machine Learning", "Computer Vision", "Natural Language Processing", "Robotics", "Artificial Intelligence", "Human-Robot Interaction"].map((area) => (
              <DropdownMenuCheckboxItem
                key={area}
                checked={selectedFilters.includes(area)}
                onCheckedChange={() => toggleFilter(area)}
              >
                <Badge variant="outline">{area}</Badge>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Affiliation</TableHead>
            <TableHead>Research Areas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredResearchers.map((researcher) => (
            <TableRow key={researcher.name}>
              <TableCell className="font-medium">
                <a href={researcher.homepage} target="_blank" rel="noopener noreferrer">
                  {researcher.name}
                </a>
              </TableCell>
              <TableCell>{researcher.position}</TableCell>
              <TableCell>{researcher.affiliation}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {researcher.researchAreas.map((area) => (
                    <Badge key={area} variant="outline">{area}</Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

export default NewTable;
