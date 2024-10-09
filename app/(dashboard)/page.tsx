"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Camera, Heart } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            {/* Card Header with Image */}
            <CardHeader className="p-0">
              <img
                src="https://live.staticflickr.com/5334/17632926159_69bc0c976a_k.jpg"
                alt="Beautiful Landscape"
                className="w-full h-auto object-cover rounded-t-md"
              />
            </CardHeader>

            {/* Card Content with Left and Right Panes */}
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left Pane: Artist Info and Follow Button */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="Bob Jones"
                    />
                    <AvatarFallback>BJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Bob Jones
                    </p>
                    <p className="text-sm text-gray-500">Photographer</p>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Follow
                  </Button>
                </div>

                {/* Right Pane: Likes, Follows, Comments, Like Button */}
                <div className="flex flex-col items-end space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Views:</span>
                    <span className="font-semibold text-gray-800">1,234</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Likes:</span>
                    <span className="font-semibold text-gray-800">123</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Comments:</span>
                    <span className="font-semibold text-gray-800">12</span>
                  </div>
                  <Heart className="w-6 h-6 text-pink-500" />
                  <span>Like</span>
                </div>
              </div>

              {/* Shot Information */}
              <div className="flex items-center text-sm text-gray-700 mt-6">
                <span>Shot with a Canon EOS 5D Mark III</span>
                <Camera className="ml-2 text-gray-500 w-5 h-5" />
              </div>
            </CardContent>

            {/* Card Footer with View Button */}
            <CardFooter className="p-6 flex justify-end">
              <Button
                variant="default"
                size="sm"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white"
              >
                <span>
                  <a
                    href="https://www.flickr.com/photos/130973380@N08/17632926159"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Flickr
                  </a>
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
