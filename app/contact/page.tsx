import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label";
  import { Input } from "@/components/ui/input";
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import { MapPinIcon, PhoneIcon, MailOpenIcon } from "@/components/icons";
  
  export default function Contact() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid max-w-6xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="text-muted-foreground md:text-xl">
              Have a legal matter you need assistance with? Reach out to our experienced attorneys today.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPinIcon className="h-6 w-6 text-muted-foreground" />
                <p className="text-sm font-medium">
                  123 Main Street, Suite 200
                  <br />
                  Anytown, State 12345
                </p>
              </div>
              <div className="flex gap-4">
                <PhoneIcon className="h-6 w-6 text-muted-foreground" />
                <p className="text-sm font-medium">(555) 123-4567</p>
              </div>
              <div className="flex gap-4">
                <MailOpenIcon className="h-6 w-6 text-muted-foreground" />
                <p className="text-sm font-medium">info@lawfirm.com</p>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Fill out the form below and we will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="practice-area">Practice Area</Label>
                  <Select defaultValue="criminal-law">
                    <SelectTrigger id="practice-area">
                      <SelectValue placeholder="Select practice area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="criminal-law">Criminal Law</SelectItem>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe your legal matter" className="min-h-[100px]" />
                </div>
                <Button>Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }