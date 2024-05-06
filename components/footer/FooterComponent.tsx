"use client";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer className="bg-secondary rounded-none mb-0">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title className="text-gray-900" title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link className="text-gray-900" href="#">
                About
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Careers
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Brand Center
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-gray-900" title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link className="text-gray-900" href="#">
                Discord Server
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Twitter
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Facebook
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-gray-900" title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link className="text-gray-900" href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Licensing
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Terms &amp; Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-gray-900" title="download" />
            <Footer.LinkGroup col>
              <Footer.Link className="text-gray-900" href="#">
                iOS
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Android
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                Windows
              </Footer.Link>
              <Footer.Link className="text-gray-900" href="#">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-cyan-800 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-gray-900"
            href="#"
            by="Flowbite™"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-gray-900" href="#" icon={BsFacebook} />
            <Footer.Icon
              className="text-gray-900"
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon className="text-gray-900" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-gray-900" href="#" icon={BsGithub} />
            <Footer.Icon className="text-gray-900" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
