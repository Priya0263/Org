"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DonationInfoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onContinue: () => void
}

export function DonationInfoModal({ open, onOpenChange, onContinue }: DonationInfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Important Information About Organ Donation</DialogTitle>
          <DialogDescription>
            Please read this information carefully before proceeding with registration.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <div>
            <h3 className="text-lg font-semibold">The Organ Donation Process</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Organ donation is a life-saving gift that occurs after a person has died or, in some cases, while a donor
              is alive. The donation process involves careful medical evaluation to ensure the organs are suitable for
              transplantation. After brain stem death is confirmed by medical experts, organs are recovered in a
              surgical procedure that maintains the dignity of the donor.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">A Family Decision</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Organ donation is a decision that affects your entire family. We strongly encourage you to discuss your
              decision with your family members and loved ones. In many cases, family members will be consulted at the
              time of donation, so it's important they understand and respect your wishes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Your Right to Withdraw</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Registering as an organ donor is a voluntary decision. You have the right to withdraw your pledge at any
              time by contacting our support team or updating your preferences in your account settings. There are no
              penalties or consequences for changing your mind.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Medical Considerations</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Almost anyone can be an organ donor regardless of age or medical history. Medical professionals evaluate
              each potential donor at the time of death to determine which organs and tissues are suitable for donation.
              Having a medical condition does not automatically disqualify you from being a donor.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Respect and Dignity</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Throughout the donation process, the donor's body is treated with the utmost respect and dignity. Organ
              donation does not interfere with funeral arrangements, including open-casket services. There is no cost to
              the donor's family for organ and tissue donation.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onContinue}>I Understand, Continue to Registration</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
